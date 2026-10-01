module.exports = [
"[project]/components/contact-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ContactForm() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                const body = await res.json().catch(()=>({}));
                throw new Error(body?.error || "Falha ao enviar o pedido.");
            }
            setStatus("success");
            form.reset();
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Falha ao enviar o pedido.");
        }
    }
    if (status === "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-pasture-500/30 bg-pasture-100 p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display text-xl text-pasture-900",
                    children: "Pedido enviado"
                }, void 0, false, {
                    fileName: "[project]/components/contact-form.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-[15px] leading-relaxed text-pasture-900/80",
                    children: "Obrigado pelo contacto. A nossa equipa vai analisar o seu pedido e responder por email ou telefone o mais rápido possível."
                }, void 0, false, {
                    fileName: "[project]/components/contact-form.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setStatus("idle"),
                    className: "mt-5 text-sm font-medium text-pasture-800 underline underline-offset-4",
                    children: "Enviar outro pedido"
                }, void 0, false, {
                    fileName: "[project]/components/contact-form.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/contact-form.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Nome completo",
                        name: "name",
                        required: true,
                        autoComplete: "name"
                    }, void 0, false, {
                        fileName: "[project]/components/contact-form.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Telefone",
                        name: "phone",
                        type: "tel",
                        required: true,
                        autoComplete: "tel"
                    }, void 0, false, {
                        fileName: "[project]/components/contact-form.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact-form.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                label: "Email",
                name: "email",
                type: "email",
                required: true,
                autoComplete: "email"
            }, void 0, false, {
                fileName: "[project]/components/contact-form.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "service",
                        className: "block text-sm font-medium text-pasture-900",
                        children: "Serviço pretendido"
                    }, void 0, false, {
                        fileName: "[project]/components/contact-form.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "service",
                        name: "service",
                        required: true,
                        defaultValue: "",
                        className: "mt-2 w-full rounded-xl border border-pasture-900/15 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none focus:border-clay-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                disabled: true,
                                children: "Escolha um serviço"
                            }, void 0, false, {
                                fileName: "[project]/components/contact-form.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: s.title,
                                    children: s.title
                                }, s.slug, false, {
                                    fileName: "[project]/components/contact-form.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Outro",
                                children: "Outro / não sei ainda"
                            }, void 0, false, {
                                fileName: "[project]/components/contact-form.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/contact-form.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact-form.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        className: "block text-sm font-medium text-pasture-900",
                        children: "Descreva o seu pedido"
                    }, void 0, false, {
                        fileName: "[project]/components/contact-form.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "message",
                        name: "message",
                        required: true,
                        rows: 5,
                        placeholder: "Local da exploração, dimensão, prazo desejado e qualquer outro detalhe relevante.",
                        className: "mt-2 w-full resize-none rounded-xl border border-pasture-900/15 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none placeholder:text-ink-900/40 focus:border-clay-500"
                    }, void 0, false, {
                        fileName: "[project]/components/contact-form.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/contact-form.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-xl bg-clay-100 px-4 py-3 text-sm text-clay-600",
                children: errorMsg
            }, void 0, false, {
                fileName: "[project]/components/contact-form.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: status === "sending",
                className: "w-full rounded-full bg-clay-500 px-7 py-3.5 text-[15px] font-medium text-terra-50 transition-colors hover:bg-clay-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
                children: status === "sending" ? "A enviar..." : "Enviar pedido"
            }, void 0, false, {
                fileName: "[project]/components/contact-form.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/contact-form.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function Field({ label, name, type = "text", required, autoComplete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-pasture-900",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/contact-form.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: name,
                name: name,
                type: type,
                required: required,
                autoComplete: autoComplete,
                className: "mt-2 w-full rounded-xl border border-pasture-900/15 bg-white px-4 py-3 text-[15px] text-ink-900 outline-none placeholder:text-ink-900/40 focus:border-clay-500"
            }, void 0, false, {
                fileName: "[project]/components/contact-form.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/contact-form.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services,
    "site",
    ()=>site
]);
const site = {
    name: "Soluções AgroPecuária",
    tagline: "Cuidamos da terra, das plantas e dos animais",
    phones: [
        "+244 940 440 477",
        "+244 926 633 699",
        "+244 958 168 398",
        "+244 956 404 018"
    ],
    whatsapp: "+244940440477",
    address: "Rua da Amizade e Centralidade da Quilemba, bloco A 186, Arimba, Lubango",
    email: "geral@solucoesagropecuaria.co.ao"
};
const services = [
    {
        slug: "planos-de-negocio",
        title: "Planos de negócios e estudos de viabilidade",
        short: "Estruturamos o seu projecto agropecuário do papel ao terreno.",
        description: "Elaboramos planos de negócios e estudos de viabilidade técnica e económica para explorações agrícolas e pecuárias, avaliando terreno, investimento, retorno esperado e riscos antes de qualquer obra começar."
    },
    {
        slug: "consultoria-agraria",
        title: "Consultoria agrária",
        short: "Acompanhamento técnico para decisões mais seguras na exploração.",
        description: "Apoio técnico contínuo na gestão da exploração agrícola: escolha de culturas, calendário agrícola, uso do solo e correcção de práticas que limitam a produtividade."
    },
    {
        slug: "veterinaria-nutricao",
        title: "Veterinária e nutrição animal",
        short: "Saúde e alimentação do efectivo, do curral ao aviário.",
        description: "Cuidados veterinários, planos de vacinação e programas de nutrição ajustados a cada espécie e fase de produção, para reduzir perdas e melhorar o rendimento do rebanho ou do plantel."
    },
    {
        slug: "fitoterapia-fitosanidade",
        title: "Fitoterapia e fitossanidade",
        short: "Plantas e culturas protegidas com tratamentos adequados.",
        description: "Diagnóstico e tratamento fitossanitário das culturas, incluindo soluções fitoterapêuticas, para prevenir pragas e doenças e manter a plantação saudável."
    },
    {
        slug: "material-agropecuario",
        title: "Venda de material agropecuário",
        short: "Equipamento e insumos para o dia a dia da exploração.",
        description: "Fornecimento de material e insumos agropecuários seleccionados para as necessidades reais de cada exploração, com orientação sobre o que usar e quando."
    },
    {
        slug: "incubadoras",
        title: "Construção e manutenção de incubadoras",
        short: "Instalações de incubação construídas e mantidas por nós.",
        description: "Construção, reparação e manutenção periódica de incubadoras avícolas, garantindo condições estáveis de temperatura e humidade para melhores taxas de eclosão."
    },
    {
        slug: "tanques-mangas",
        title: "Construção de tanques e mangas de vacinação",
        short: "Infra-estruturas para maneio e vacinação do gado.",
        description: "Projecto e construção de tanques e mangas de vacinação dimensionados ao efectivo da exploração, facilitando um maneio sanitário seguro e eficiente do gado."
    },
    {
        slug: "jardinagem",
        title: "Jardinagem",
        short: "Espaços verdes cuidados com o mesmo rigor técnico.",
        description: "Concepção, plantação e manutenção de jardins e espaços verdes, residenciais ou institucionais, com plantas adequadas ao clima e ao terreno."
    }
];
}),
];

//# sourceMappingURL=_0jvw2t_._.js.map