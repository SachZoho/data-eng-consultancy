import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const caseStudiesDir = path.join(process.cwd(), 'content/case-studies');

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  kpi: string;
  tech_stack: string[];
  content: string;
}

export async function getAllCaseStudies() {
  const files = fs.readdirSync(caseStudiesDir);

  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const fileContents = fs.readFileSync(path.join(caseStudiesDir, file), 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        ...data,
        content,
      } as CaseStudy;
    });
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const files = fs.readdirSync(caseStudiesDir);
    const file = files.find(f => f === `${slug}.mdx`);

    if (!file) return null;

    const fileContents = fs.readFileSync(path.join(caseStudiesDir, file), 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    } as CaseStudy;
  } catch (e) {
    console.error(e);
    return null;
  }
}
