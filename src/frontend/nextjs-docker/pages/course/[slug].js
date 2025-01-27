import CoursePageTemplate from "../../components/coursePageTemplate";
import { useRouter } from "next/router";

export default function CoursePage({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CoursePageTemplate title={data.title}></CoursePageTemplate>;
    </>
  );
}

// Fetch dynamic paths
export async function getStaticPaths() {
  const response = await fetch("http://172.18.0.2:8000/courses");
  const pages = await response.json();

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch("http://172.18.0.2:8000/course/${slug}");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10,
  };
}
