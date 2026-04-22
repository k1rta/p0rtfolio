import { config as personalConfig } from './personal';
import { config as demoConfig } from './demo';

const mode = import.meta.env.PORTFOLIO_MODE || 'personal';

export const config = mode === 'personal' ? personalConfig : demoConfig;
