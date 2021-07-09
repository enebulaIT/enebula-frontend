import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import downloadButton from '../../../images/download-icon.svg';

const BlockchainAudits = (props) => {
  const [auditData, setAuditData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 100);
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      'https://t9s9v4aan6.execute-api.ap-south-1.amazonaws.com/default/getAllAuditData'
    );
    // Error case
    if (response.status !== 200) {
      setAuditData([]);
    }

    // Positive case
    let parsedData = [];
    response.data.forEach((audiData) => {
      if (!audiData.IsDeleted) {
        parsedData.push({
          key: audiData._id,
          name: audiData.Name,
          coverage: audiData.Coverage,
          type: audiData.Type,
          language: audiData.Language,
          contractType: audiData.ContractType,
          stages: audiData.Stages,
          filePath: audiData.DocLink,
        });
      }
    });
    setAuditData([...parsedData]);
    setDataLoading(false);
  };

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

  console.log(auditData);
  return (
    <div>
      <section className="section pt-40 pb-0">
        <div className="container">
          <br />
          <h1>Reports</h1>
          <Table
            loading={dataLoading}
            dataSource={auditData}
            columns={columns}
            pagination={false}
          />
        </div>
      </section>
    </div>
  );
};

export default BlockchainAudits;
