# Soluções AgroPecuária — website institucional

Site institucional estático (Next.js 16 + Tailwind CSS v4) para a Soluções AgroPecuária,
com formulário de contacto que envia o pedido por email através da API do [Resend](https://resend.com).

## Páginas

- `/` — Início
- `/sobre` — Sobre nós
- `/servicos` — Serviços (detalhe dos 8 serviços do cartão de visita)
- `/contacto` — Contacto, com formulário de pedido de orçamento

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Configurar o envio de email do formulário

O formulário de contacto (`/contacto`) envia os pedidos por email usando a API do Resend.
Sem estas variáveis de ambiente, o formulário mostra uma mensagem de erro amigável ao
visitante em vez de tentar enviar.

1. Crie uma conta gratuita em https://resend.com e verifique o domínio de email da empresa
   (ou use o domínio de testes do Resend enquanto o domínio próprio não está verificado).
2. Crie um ficheiro `.env.local` na raiz do projecto com:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=geral@solucoesagropecuaria.co.ao
CONTACT_FROM_EMAIL=Site Soluções AgroPecuária <site@solucoesagropecuaria.co.ao>
```

- `RESEND_API_KEY` — chave da API do Resend.
- `CONTACT_TO_EMAIL` — email(is) da empresa que deve receber os pedidos.
- `CONTACT_FROM_EMAIL` — remetente autorizado (tem de pertencer a um domínio verificado no Resend).

3. Ao publicar (ex. na Vercel), adicione as mesmas três variáveis nas definições do projecto.

## Conteúdo e marca

- Textos de serviços, contactos e morada estão centralizados em `lib/site.ts` — edite ali
  para actualizar telefones, morada ou a lista de serviços.
- O logótipo foi recriado em SVG a partir do cartão de visita em `components/logo-mark.tsx`.

## Publicar

Recomenda-se a [Vercel](https://vercel.com) (autor do Next.js). Basta ligar o repositório
Git e definir as três variáveis de ambiente acima.
