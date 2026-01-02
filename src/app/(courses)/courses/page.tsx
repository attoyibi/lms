import MainContent from '@/features/courses/components/MainContent';
import { featuredCourses, subscriptions } from '@/lib/placeholder-data';
export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-white">
            <MainContent subscriptions={subscriptions} featuredCourses={featuredCourses} />
        </div>
    );
}
