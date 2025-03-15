import { CreateTripForm } from '@/app/components/create-trip-form';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create a New Trip</h1>
        <CreateTripForm />
      </div>
    </div>
  );
}
