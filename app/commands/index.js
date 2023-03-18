import { TYPE_ANALYZE, TYPE_SUM, TYPE_TRANSLATE } from '../../constants/command.js';
import COMMAND_ANALYZE_ANALYZE from './analyze-analyze.js';
import COMMAND_ANALYZE_LITERARILY from './analyze-literarily.js';
import COMMAND_ANALYZE_MATHEMATICALLY from './analyze-mathematically.js';
import COMMAND_ANALYZE_NUMEROLOGICALLY from './analyze-numerologically.js';
import COMMAND_ANALYZE_PHILOSOPHICALLY from './analyze-philosophically.js';
import COMMAND_ANALYZE_PSYCHOLOGICALLY from './analyze-psychologically.js';
import COMMAND_BOT_ACTIVATE from './bot-activate.js';
import COMMAND_BOT_CONTINUE from './bot-continue.js';
import COMMAND_BOT_DEACTIVATE from './bot-deactivate.js';
import COMMAND_BOT_DRAW_DEMO from './bot-draw-demo.js';
import COMMAND_BOT_DRAW from './bot-draw.js';
import COMMAND_BOT_FORGET from './bot-forget.js';
import COMMAND_BOT_RETRY from './bot-retry.js';
import COMMAND_BOT_SEARCH from './bot-search.js';
import COMMAND_BOT_SEARCH_DEMO from './bot-search-demo.js';
import COMMAND_BOT_SUMMON_DEMO from './bot-summon-demo.js';
import COMMAND_BOT_TALK_DEMO from './bot-talk-demo.js';
import COMMAND_BOT_TALK from './bot-talk.js';
import Command from './command.js';
import COMMAND_SUM_ADVISE from './sum-advise.js';
import COMMAND_SUM_APOLOGIZE from './sum-apologize.js';
import COMMAND_SUM_BLAME from './sum-blame.js';
import COMMAND_SUM_COMFORT from './sum-comfort.js';
import COMMAND_SUM_COMPLAIN from './sum-complain.js';
import COMMAND_SUM_ENCOURAGE from './sum-encourage.js';
import COMMAND_SUM_LAUGH from './sum-laugh.js';
import COMMAND_SUM_SUM from './sum-sum.js';
import COMMAND_SYS_COMMAND from './sys-command.js';
import COMMAND_SYS_DEPLOY from './sys-deploy.js';
import COMMAND_SYS_DOC from './sys-doc.js';
import COMMAND_SYS_REPORT from './sys-report.js';
import COMMAND_SYS_VERSION from './sys-version.js';
import COMMAND_TRANSLATE_TO_EN from './translate-to-en.js';
import COMMAND_TRANSLATE_TO_JA from './translate-to-ja.js';

export const ALL_COMMANDS = [
  COMMAND_ANALYZE_ANALYZE,
  COMMAND_ANALYZE_LITERARILY,
  COMMAND_ANALYZE_MATHEMATICALLY,
  COMMAND_ANALYZE_NUMEROLOGICALLY,
  COMMAND_ANALYZE_PHILOSOPHICALLY,
  COMMAND_ANALYZE_PSYCHOLOGICALLY,
  COMMAND_BOT_ACTIVATE,
  COMMAND_BOT_CONTINUE,
  COMMAND_BOT_DEACTIVATE,
  COMMAND_BOT_DRAW_DEMO,
  COMMAND_BOT_DRAW,
  COMMAND_BOT_FORGET,
  COMMAND_BOT_RETRY,
  COMMAND_BOT_SEARCH,
  COMMAND_BOT_SUMMON_DEMO,
  COMMAND_BOT_TALK_DEMO,
  COMMAND_BOT_TALK,
  COMMAND_SUM_ADVISE,
  COMMAND_SUM_APOLOGIZE,
  COMMAND_SUM_BLAME,
  COMMAND_SUM_COMFORT,
  COMMAND_SUM_COMPLAIN,
  COMMAND_SUM_ENCOURAGE,
  COMMAND_SUM_LAUGH,
  COMMAND_SUM_SUM,
  COMMAND_SYS_COMMAND,
  COMMAND_SYS_DEPLOY,
  COMMAND_SYS_DOC,
  COMMAND_SYS_REPORT,
  COMMAND_SYS_VERSION,
  COMMAND_TRANSLATE_TO_EN,
  COMMAND_TRANSLATE_TO_JA,
];

export const INFO_COMMANDS = [
  COMMAND_SYS_VERSION,
  COMMAND_SYS_DOC,
  COMMAND_SYS_REPORT,
];

export const GENERAL_COMMANDS = [
  COMMAND_BOT_SUMMON_DEMO,
  COMMAND_SYS_COMMAND,
  COMMAND_BOT_TALK_DEMO,
  COMMAND_BOT_DRAW_DEMO,
  COMMAND_TRANSLATE_TO_EN,
  COMMAND_TRANSLATE_TO_JA,
  COMMAND_BOT_SEARCH_DEMO,
  COMMAND_BOT_FORGET,
  COMMAND_SUM_SUM,
  COMMAND_ANALYZE_ANALYZE,
];

export const ENQUIRE_COMMANDS = ALL_COMMANDS.filter(({ type }) => (
  type === TYPE_SUM
  || type === TYPE_ANALYZE
  || type === TYPE_TRANSLATE
));

export {
  COMMAND_ANALYZE_ANALYZE,
  COMMAND_ANALYZE_LITERARILY,
  COMMAND_ANALYZE_MATHEMATICALLY,
  COMMAND_ANALYZE_NUMEROLOGICALLY,
  COMMAND_ANALYZE_PHILOSOPHICALLY,
  COMMAND_ANALYZE_PSYCHOLOGICALLY,
  COMMAND_BOT_ACTIVATE,
  COMMAND_BOT_CONTINUE,
  COMMAND_BOT_DEACTIVATE,
  COMMAND_BOT_DRAW_DEMO,
  COMMAND_BOT_DRAW,
  COMMAND_BOT_FORGET,
  COMMAND_BOT_RETRY,
  COMMAND_BOT_SEARCH,
  COMMAND_BOT_SUMMON_DEMO,
  COMMAND_BOT_TALK_DEMO,
  COMMAND_BOT_TALK,
  Command,
  COMMAND_SUM_ADVISE,
  COMMAND_SUM_APOLOGIZE,
  COMMAND_SUM_BLAME,
  COMMAND_SUM_COMFORT,
  COMMAND_SUM_COMPLAIN,
  COMMAND_SUM_ENCOURAGE,
  COMMAND_SUM_LAUGH,
  COMMAND_SUM_SUM,
  COMMAND_SYS_COMMAND,
  COMMAND_SYS_DEPLOY,
  COMMAND_SYS_DOC,
  COMMAND_SYS_REPORT,
  COMMAND_SYS_VERSION,
  COMMAND_TRANSLATE_TO_EN,
  COMMAND_TRANSLATE_TO_JA,
};
