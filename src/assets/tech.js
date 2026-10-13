import {
  SiAmazonwebservices,
  SiAndroid,
  SiAwslambda,
  SiCloudflare,
  SiDocker,
  SiExpo,
  SiGnubash,
  SiIos,
  SiKubernetes,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiStripe,
  SiTerraform,
  SiVault,
  SiWordpress,
} from "react-icons/si";

// anything not listed renders as its name alone
const ICONS = {
  AWS: SiAmazonwebservices,
  Lambda: SiAwslambda,
  Terraform: SiTerraform,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Vault: SiVault,
  Python: SiPython,
  Bash: SiGnubash,
  Cloudflare: SiCloudflare,
  PostgreSQL: SiPostgresql,
  Stripe: SiStripe,
  NestJS: SiNestjs,
  Expo: SiExpo,
  "React Native": SiReact,
  React: SiReact,
  "Node.js": SiNodedotjs,
  iOS: SiIos,
  Android: SiAndroid,
  "Next.js": SiNextdotjs,
  Redis: SiRedis,
  WordPress: SiWordpress,
};

export function techIcon(name) {
  return ICONS[name] ?? null;
}
