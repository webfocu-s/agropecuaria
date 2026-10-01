import {
  IconPlan,
  IconAdvice,
  IconVet,
  IconLeaf,
  IconMaterial,
  IconIncubator,
  IconTank,
  IconGarden,
} from "@/components/icons";

export const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "planos-de-negocio": IconPlan,
  "consultoria-agraria": IconAdvice,
  "veterinaria-nutricao": IconVet,
  "fitoterapia-fitosanidade": IconLeaf,
  "material-agropecuario": IconMaterial,
  incubadoras: IconIncubator,
  "tanques-mangas": IconTank,
  jardinagem: IconGarden,
};
