import React from 'react';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AllInboxIcon from '@mui/icons-material/AllInbox';


export const jobType = [
    {
        name: 'Zastępstwo',
        representation: 1,
        icon: React.createElement(WorkHistoryIcon, {}),
    },
    {
        name: 'Fotokopie akt',
        representation: 2,
        icon: React.createElement(FileCopyIcon, {}),
    },
    {
        name: 'Inne',
        representation: 3,
        icon: React.createElement(AllInboxIcon, {}),
    }
]