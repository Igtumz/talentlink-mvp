import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = String(body?.email ?? '').trim();
    const password = String(body?.password ?? '');

    // Campos opcionales; no bloquean el registro:
    const name = body?.name ? String(body.name).trim() : undefined;
    const username = body?.username ? String(body.username).trim() : undefined;

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, error: 'Faltan campos: email y password' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { ok: false, error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error('Supabase signUp error:', error);
      return NextResponse.json(
        { ok: false, error: error.message ?? 'Error al registrar usuario' },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true, data, info: { name, username } }, { status: 200 });
  } catch (err: any) {
    console.error('Register route error:', err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? 'Unexpected error' },
      { status: 500 }
    );
  }
}
