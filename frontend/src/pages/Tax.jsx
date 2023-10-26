import React from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import CrudModule from '@/modules/CrudModule';
import Taxfrom from '@/forms/TaxForm';

export default function Tax() {
  const entity = 'paymentMode';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['name'];

  const readColumns = [
    {
      title: 'Tax Name',
      dataIndex: 'taxName',
    },
    {
      title: 'Tax Value',
      dataIndex: 'taxValue',
    },
    {
      title: 'Is Default',
      dataIndex: 'isDefault',
    },
    {
      title: 'enabled',
      dataIndex: 'enabled',
    },
  ];
  const dataTableColumns = [
    {
      title: 'Tax Name',
      dataIndex: 'taxName',
    },
    {
      title: 'Tax Value',
      dataIndex: 'taxValue',
    },
    {
      title: 'Is Default',
      dataIndex: 'isDefault',
      key: 'isDefault',
      render: (text, row) => {
        return {
          props: {
            style: {
              width: '60px',
            },
          },
          children: (
            <Switch
              checked={text}
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          ),
        };
      },
    },
    {
      title: 'Enabled',
      dataIndex: 'enabled',
      key: 'enabled',
      render: (text, row) => {
        return {
          props: {
            style: {
              width: '60px',
            },
          },
          children: (
            <Switch
              checked={text}
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          ),
        };
      },
    },
  ];

  const ADD_NEW_ENTITY = 'Add new Tax';
  const DATATABLE_TITLE = 'Tax List';
  const ENTITY_NAME = 'payment mode';
  const CREATE_ENTITY = 'Create Tax';
  const UPDATE_ENTITY = 'Update Tax';
  const PANEL_TITLE = 'Tax Panel';

  const config = {
    entity,
    PANEL_TITLE,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<Taxfrom />}
      updateForm={<Taxfrom isUpdateForm={true} />}
      config={config}
    />
  );
}
