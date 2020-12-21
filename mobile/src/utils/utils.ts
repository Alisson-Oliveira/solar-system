export function convertNameToId(name: string): number {
  switch (name) {
    case 'Sol':
      return 0;
    case 'Mercúrio':
      return 1;
    case 'Vênus':
      return 2;
    case 'Terra':
      return 3;
    case 'Marte':
      return 4;
    case 'Júpiter':
      return 5;
    case 'Saturno':
      return 6;
    case 'Urânio':
      return 7;
    case 'Netuno':
      return 8;
    case 'Plutão':
      return 9;  
    default:
      return -1;
  }
}

export function convertIdToName(value: number): string {
  switch (value) {
    case 0:
      return 'Sol';
    case 1:
      return 'Mercúrio';
    case 2:
      return 'Vênus';
    case 3:
      return 'Terra';
    case 4:
      return 'Marte';
    case 5:
      return 'Júpiter';
    case 6:
      return 'Saturno';
    case 7:
      return 'Urânio';
    case 8:
      return 'Netuno';
    case 9:
      return 'Plutão';  
    default:
      return '';
  }
}

export function checkName(name: string): string {
  switch (name) {
    case 'Sol':
      return 'Sol';
    case 'Mercúrio':
      return 'Mercúrio';
    case 'Vênus':
      return 'Vênus';
    case 'Terra':
      return 'Terra';
    case 'Marte':
      return 'Marte';
    case 'Júpiter':
      return 'Júpiter';
    case 'Saturno':
      return 'Saturno';
    case 'Urânio':
      return 'Urânio';
    case 'Netuno':
      return 'Netuno';
    case 'Plutão':
      return 'Plutão';  
    default:
      return '';
  }
}