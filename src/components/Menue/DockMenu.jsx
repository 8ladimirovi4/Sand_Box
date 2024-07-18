// src/DockMenu.js

import React from 'react';
import { Dock } from 'primereact/dock';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const DockMenu = () => {
  const toast = useRef(null);

  const items = [
    {
      label: 'Finder',
      icon: 'pi pi-fw pi-search',
      command: () => {
        toast.current.show({ severity: 'info', summary: 'Finder', detail: 'Finder selected' });
      }
    },
    {
      label: 'Application',
      icon: 'pi pi-fw pi-th-large',
      command: () => {
        toast.current.show({ severity: 'info', summary: 'Application', detail: 'Application selected' });
      }
    },
    {
      label: 'Folder',
      icon: 'pi pi-fw pi-folder',
      command: () => {
        toast.current.show({ severity: 'info', summary: 'Folder', detail: 'Folder selected' });
      }
    },
    {
      label: 'Trash',
      icon: 'pi pi-fw pi-trash',
      command: () => {
        toast.current.show({ severity: 'info', summary: 'Trash', detail: 'Trash selected' });
      }
    }
  ];

  return (
    <div>
      <Toast ref={toast} />
      <Dock model={items} position="bottom" />
    </div>
  );
};

export default DockMenu;
