import React, { useEffect, useState } from 'react';
import heroImage from '../../../images/about-us-1.png';
import { Link } from 'react-router-dom';
import { PageHeader, Table } from 'antd';
import downloadButton from '../../../images/download-icon.svg';
import AutditFile1 from '../../../auditFiles/Smart-Contract-Audit-Report.pdf';

const BlockchainAudits = (props) => {
  useEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 100);
  }, []);

  const dataSource = [
    {
      key: '1',
      name: 'Only Up',
      coverage: 'Audit',
      type: 'Token',
      language: 'Solidity',
      platform: 'BSCScan',
      stages: 'June 1, 2021 (Audited)',
      filePath: AutditFile1,
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Coverage',
      dataIndex: 'coverage',
      key: 'coverage',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: 'Stages',
      dataIndex: 'stages',
      key: 'stages',
    },
    {
      title: ' ',
      dataIndex: 'filePath',
      key: 'filePath',
      render: (text, record) => (
        <button
          onClick={() => {
            console.log(record.filePath);
            window.open(record.filePath);
          }}
          className="btn-no-style"
        >
          <img src={downloadButton} />
        </button>
      ),
    },
  ];

  return (
    <div>
      <section className="section pt-40 pb-0">
        <div className="container">
          <h1>Reports</h1>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </section>
    </div>
  );
};

export default BlockchainAudits;
