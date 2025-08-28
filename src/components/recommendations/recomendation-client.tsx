"use client";

import { useState } from "react";
import { useForm, useFieldArray, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getRecommendationsAction } from "@/actions/recommendations";
import { Loader2, PlusCircle, Trash2, Wand2 } from "lucide-react";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  contentHistory: z.array(z.object({
    contentId: z.string().min(1, "Content ID is required."),
    interactions: z.coerce.number().min(0, "Interactions must be non-negative."),
  })).min(1, "At least one content item is required."),
  userPreferences: z.string().optional(),
  numberOfRecommendations: z.coerce.number().min(1).max(10).default(5),
});

type FormData = z.infer<typeof formSchema>;
type Recommendation = { contentId: string; reason: string };

export function RecommendationClient() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contentHistory: [{ contentId: "post_123", interactions: 1500 }],
      userPreferences: "technology, AI, creative coding",
      numberOfRecommendations: 3,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "contentHistory",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    const result = await getRecommendationsAction(data);

    if ("error" in result) {
      setError(result.error);
    } else if (result.recommendations) {
      setRecommendations(result.recommendations);
    }
    setIsLoading(false);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Generate Recommendations</CardTitle>
          <CardDescription>
            Analyze content popularity to generate recommendations for users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label>Content History</Label>
                <div className="space-y-4 pt-2">
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex items-end gap-2 rounded-md border p-3">
                      <div className="grid flex-1 grid-cols-2 gap-2">
                        <FormField
                          control={form.control}
                          name={`contentHistory.${index}.contentId`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Content ID</FormLabel>
                              <FormControl><Input {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`contentHistory.${index}.interactions`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Interactions</FormLabel>
                              <FormControl><Input type="number" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)} disabled={fields.length <= 1}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                 <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ contentId: "", interactions: 0 })}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Content
                </Button>
              </div>

              <FormField
                control={form.control}
                name="userPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Preferences (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., music, travel, AI" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="numberOfRecommendations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Recommendations</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Get Recommendations
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
          <CardDescription>
            Content suggestions generated by the AI based on your input.
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-[300px]">
            {isLoading && (
                 <div className="flex h-full min-h-[200px] items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                 </div>
            )}
            {error && <p className="text-destructive">{error}</p>}
            {!isLoading && !error && recommendations.length === 0 && (
                <div className="flex h-full min-h-[200px] items-center justify-center rounded-md border border-dashed">
                    <p className="text-muted-foreground">Recommendations will appear here.</p>
                </div>
            )}
            {recommendations.length > 0 && (
                <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                        <div key={index}>
                            <div className="space-y-1">
                                <p className="font-semibold text-primary">{rec.contentId}</p>
                                <p className="text-sm text-muted-foreground">{rec.reason}</p>
                            </div>
                            {index < recommendations.length - 1 && <Separator className="mt-4" />}
                        </div>
                    ))}
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
