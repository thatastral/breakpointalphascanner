import App from './App';
import AdminPanel from './admin';

/**
 * Simple router to toggle between the main app and admin panel
 * 
 * - Main app: /
 * - Admin panel: /?admin=true or #admin
 */
export default function Root() {
  // Check if admin mode is enabled via URL
  const isAdmin = 
    window.location.search.includes('admin=true') || 
    window.location.hash === '#admin';

  if (isAdmin) {
    return <AdminPanel />;
  }

  return <App />;
}
