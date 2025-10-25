'use client';
import AdminLayout from '@/components/admin/AdminLayout';
import { ContentProvider } from '@/contexts/ContentContext';

export default function AdminPage() {
  return (
    <ContentProvider>
      <AdminLayout active="dashboard" />
    </ContentProvider>
  );
}


