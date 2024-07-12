  const GUID = {
      EMPTY: '00000000-0000-0000-0000-000000000000',
      isValid: function (val) {
        let pattern = new RegExp('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
        return pattern.test(val);
      },
      newID: function () {
        let s = [];
        let hexDigits = '0123456789abcdef';
        for (let i = 0; i < 36; i++) s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        s[14] = '4';
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = '-';
        return s.join('');
      },
    };