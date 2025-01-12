import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/sign-up');
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
