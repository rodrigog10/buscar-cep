import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cep = searchParams.get('cep');

  // Validação do CEP
  if (!cep) {
    return NextResponse.json(
      { error: 'CEP não informado' },
      { status: 400 }
    );
  }

  // Remove caracteres não numéricos
  const cleanedCep = cep.replace(/\D/g, '');

  // Verifica se tem 8 dígitos
  if (cleanedCep.length !== 8) {
    return NextResponse.json(
      { error: 'CEP inválido (deve conter 8 dígitos)' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar CEP');
    }

    const data = await response.json();

    // Verifica se o CEP foi encontrado
    if (data.erro) {
      return NextResponse.json(
        { error: 'CEP não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}