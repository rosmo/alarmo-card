import { HassEvent, HassEntity } from 'home-assistant-js-websocket';
import { AlarmStates, AlarmoEvents } from './const';

export type CardConfig = {
  type: string;
  entity: string;
  name: string;
  keep_keypad_visible: boolean;
  button_scale_keypad: number;
  button_scale_actions: number;
  states: Partial<Record<AlarmStates, Partial<StateConfig>>>;
  show_messages: boolean;
  show_ready_indicator: boolean;
  show_bypassed_sensors: boolean;
  use_code_dialog: boolean;
  hide_keypad: boolean;
  show_code_inputfield: boolean;
  show_header: boolean;
  haptics: Partial<HapticsConfig>;
};

export type HideOptions = 'always' | 'never' | 'disarmed' | 'armed';

export type StateConfig = {
  hide: boolean | HideOptions;
  button_label: string;
  button_icon: string;
  state_label: string;
  color: string;
  button_order: number;
};

export type AlarmoEvent = HassEvent & {
  data: { [key: string]: any } & {
    event: AlarmoEvents;
    area_id: string;
  };
};

export type AlarmoEntity = HassEntity & {
  attributes: {
    arm_mode?: string;
    open_sensors?: null | { [key: string]: string };
    delay?: number;
    expiration?: string;
    code_format?: string;
    code_arm_required?: boolean;
    bypassed_sensors?: string[];
  };
};

export interface AlarmoEntry {
  area_id: string | number;
  entity_id: string;
}

export interface AlarmoConfig {
  code_arm_required: boolean;
  code_disarm_required: boolean;
  code_format: 'number' | 'text';
}

export interface CountdownConfig {
  delay: number;
  remaining: number;
}

export interface ReadyToArmModesConfig {
  modes: AlarmStates[] | null;
}

export type HapticType = 'success' | 'warning' | 'failure' | 'light' | 'medium' | 'heavy' | 'selection' | 'none';

export type HapticsConfig = {
  keypad: HapticType;
  armed: HapticType;
  disarmed: HapticType;
  code_error: HapticType;
};