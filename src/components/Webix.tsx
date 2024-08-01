import { useRef, useEffect } from 'react';
import * as webix from 'webix/webix.js';
import 'webix/webix.css';
import { WebixProps } from './types';

const Webix = ({ ui, data, select } : WebixProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const webixUIRef = useRef<any>(null);

  const setWebixData = (uiInstance: any, data: any) => {
    if (uiInstance.setValues) {
      uiInstance.setValues(data);
    } else if (uiInstance.parse) {
      uiInstance.parse(data);
    } else if (uiInstance.setValue) {
      uiInstance.setValue(data);
    }
  };

  useEffect(() => {
    if (rootRef.current) {
      webixUIRef.current = webix.ui(ui, rootRef.current);

      return () => {
        if (webixUIRef.current) {
          webixUIRef.current.destructor();
          webixUIRef.current = null;
        }
      };
    }
  }, [ui]);

  useEffect(() => {
    if (data && webixUIRef.current) {
      setWebixData(webixUIRef.current, data);
    }
    if (select && webixUIRef.current) {
      
      webixUIRef.current.select(select);
    }
  }, [data, select]);

  return <div ref={rootRef}></div>;
};

export default Webix;
