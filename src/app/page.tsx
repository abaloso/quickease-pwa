import NoteApp from '@/components/NoteApp';

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">QuickEase PWA</h1>
      <NoteApp />
    </main>
  );
}