
-- Create a table for waitlist signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) 
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for signup)
CREATE POLICY "Anyone can join waitlist" 
  ON public.waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading for duplicate check
CREATE POLICY "Anyone can check waitlist emails" 
  ON public.waitlist 
  FOR SELECT 
  USING (true);

-- Create index for faster email lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);
