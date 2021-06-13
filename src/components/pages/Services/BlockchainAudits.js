import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import downloadButton from '../../../images/download-icon.svg';
import dataSource from '../../../data/blockchainAudits/blockChainAudits';

const BlockchainAudits = (props) => {
  useEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 100);
  }, []);

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
      title: 'Contract Type',
      dataIndex: 'contractType',
      key: 'contractType',
    },
    {
      title: 'Stages',
      dataIndex: 'stages',
      key: 'stages',
    },
    {
      title: 'Download',
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
          {/* <span>Download </span> */}
          <img src={downloadButton} />
        </button>
      ),
    },
  ];

  return (
    <div>
      <section className="section pt-40 pb-0">
        <div className="container">
          <br />
          <h1>Reports</h1>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </section>
    </div>
  );
};

export default BlockchainAudits;
