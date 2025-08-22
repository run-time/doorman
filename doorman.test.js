import * as dm from './doorman';
import { describe, it, expect } from 'vitest';
import { beforeAll } from 'vitest';

beforeAll(() => {
  global.window = global.window || {};
  if (!global.navigator) {
    global.navigator = {};
  }
  if (!('userAgent' in global.navigator)) {
    global.navigator.userAgent = 'Mozilla/5.0';
  }
  if (!('language' in global.navigator)) {
    global.navigator.language = 'en-US';
  }
  global.screen = global.screen || {
    colorDepth: 24,
    width: 1920,
    height: 1080,
    availWidth: 1920,
    availHeight: 1040,
  };
});

describe('fingerprint_browser', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_browser();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_canvas', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_canvas();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_connection', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_connection();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_cookie', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_cookie();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_display', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_display();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_flash', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_flash();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_fonts', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_fonts();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_fontsmoothing', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_fontsmoothing();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_formfields', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_formfields();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_java', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_java();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_language', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_language();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_os', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_os();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_plugins', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_plugins();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_silverlight', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_silverlight();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_timezone', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_timezone();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_touch', () => {
  it('should return true or false', () => {
    const result = dm.fingerprint_touch();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_truebrowser', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_truebrowser();
    expect(typeof result).toBe('string');
  });
});

describe('fingerprint_useragent', () => {
  it('should return a string', () => {
    const result = dm.fingerprint_useragent();
    expect(typeof result).toBe('string');
  });
});

describe('recognizedPerson', () => {
  it('should return an identification number', () => {
    const result = dm.recognizedPerson();
    expect(typeof result).toBe('number');
  });

  it('should return the same number twice in a row', () => {
    const result = dm.recognizedPerson();
    expect(result).toBe(dm.recognizedPerson());
  });
});
