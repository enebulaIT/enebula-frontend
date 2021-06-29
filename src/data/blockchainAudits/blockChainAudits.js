import Etho from './auditFiles/Final-Code-Review-Report.pdf';
import EthoFinal from './auditFiles/Etho-final.pdf';
import Coinopolis from './auditFiles/Coinopolis.pdf';
import CoinopolisFinal from './auditFiles/Coinopolis-final.pdf';
import OnlyUp from './auditFiles/OnlyUp.pdf';
import Holders from './auditFiles/OnlyUp.pdf';
import Fort from './auditFiles/Fort.pdf';
import Holders2 from './auditFiles/Holders2.pdf';
import HoldCoin from './auditFiles/HoldCoin.pdf';
import Finify_Protocol from './auditFiles/Finify_Protocol.pdf';

const dataSource = [
  {
    key: '1',
    name: 'Etho Protocol',
    coverage: 'Code Review',
    type: 'Source Code',
    language: 'Go',
    contractType: '-',
    stages: 'May 5, 2021 (Audited)',
    filePath: Etho,
  },
  {
    key: '2',
    name: 'Coinopolis',
    coverage: 'Pre-Launch Audit',
    type: 'Token',
    language: 'Solidity',
    contractType: 'ERC-20',
    stages: 'May 22, 2021 (Audited)',
    filePath: Coinopolis,
  },
  {
    key: '3',
    name: 'Coinopolis',
    coverage: 'Audit',
    type: 'Token',
    language: 'Solidity',
    contractType: 'ERC1155',
    stages: 'May 30, 2021 (Audited)',
    filePath: CoinopolisFinal,
  },
  {
    key: '4',
    name: 'Coinopolis',
    coverage: 'Audit',
    type: 'Token',
    language: 'Solidity',
    contractType: 'ERC20',
    stages: 'May 31, 2021 (Audited)',
    filePath: EthoFinal,
  },
  {
    key: '5',
    name: 'Only Up',
    coverage: 'Audit',
    type: 'Token',
    language: 'Solidity',
    contractType: 'BEP20',
    stages: 'June 1, 2021 (Audited)',
    filePath: OnlyUp,
  },
  {
    key: '6',
    name: 'The Hodlers Are Millionaires',
    coverage: 'Audit',
    type: 'Token',
    language: 'Solidity',
    contractType: 'BEP20',
    stages: 'June 2, 2021 (Audited)',
    filePath: Holders,
  },
  {
    key: '7',
    name: 'FortKnoxter',
    coverage: 'Audit',
    type: 'ETH-BNB Bridge',
    language: 'Solidity',
    contractType: 'ERC20',
    stages: 'June 8, 2021 (Audited)',
    filePath: Fort,
  },
  {
    key: '9',
    name: 'HoldCoin',
    coverage: 'Audit Findings',
    type: 'Token',
    language: 'Solidity',
    contractType: 'BEP20',
    stages: 'June 8, 2021 (Audited)',
    filePath: HoldCoin,
  },
  {
    key: '8',
    name: 'The Hodlers Are Millionaires',
    coverage: 'Re-Audit',
    type: 'Token',
    language: 'Solidity',
    contractType: 'BEP20',
    stages: 'June 9, 2021 (Audited)',
    filePath: Holders2,
  },
  {
    key: '9',
    name: 'Finify Protocol',
    coverage: 'Audit',
    type: 'Token',
    language: 'Solidity',
    contractType: 'BEP20',
    stages: 'June 29, 2021 (Audited)',
    filePath: Finify_Protocol,
  },
];

export default dataSource;
