import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CourseLandingClient } from './CourseLandingClient'
import { COURSES } from '@/data/courses'

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const course = COURSES.find((c) => c.slug === slug)

  if (!course) {
    return {
      title: 'دورة غير موجودة | أكاديمية تامر',
    }
  }

  return {
    title: `${course.title} | أكاديمية تامر`,
    description: course.description,
    openGraph: {
      title: `${course.title} | أكاديمية تامر`,
      description: course.description,
      type: 'website',
    },
  }
}

export default async function CoursePage({ params }: { params: Params }) {
  const { slug } = await params
  const course = COURSES.find((c) => c.slug === slug)

  if (!course) {
    notFound()
  }

  return <CourseLandingClient course={course} />
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }))
}
