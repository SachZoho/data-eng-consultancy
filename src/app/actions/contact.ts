'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log('Contact Form Submission:', { name, email, message });

  // In a real app, you would integrate with a service like Resend or Formspree here.
  // For this demo, we'll just simulate a delay and return success.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: 'Thank you for reaching out! We will get back to you within 24 hours.',
  };
}
