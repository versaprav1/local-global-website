import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SpecialistSkeleton() {
  return (
    <Card className="glass-container">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Skeleton className="w-24 h-24 rounded-full mx-auto mb-3" />
          <Skeleton className="h-6 w-32 mx-auto mb-2" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
        <Skeleton className="h-6 w-full mb-3" />
        <Skeleton className="h-4 w-28 mx-auto mb-3" />
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Skeleton className="h-16 rounded-lg" />
          <Skeleton className="h-16 rounded-lg" />
        </div>
        <div className="flex gap-1 justify-center mb-4">
          <Skeleton className="h-6 w-12" />
          <Skeleton className="h-6 w-12" />
          <Skeleton className="h-6 w-12" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Skeleton className="h-9" />
          <Skeleton className="h-9" />
        </div>
      </CardContent>
    </Card>
  );
}

export function CenterSkeleton() {
  return (
    <Card className="glass-card">
      <Skeleton className="h-48 w-full" />
      <CardContent className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 flex-1" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ResourceSkeleton() {
  return (
    <Card className="glass-card h-full">
      <CardContent className="p-6">
        <Skeleton className="w-12 h-12 rounded-lg mb-4" />
        <Skeleton className="h-6 w-3/4 mb-3" />
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
}
