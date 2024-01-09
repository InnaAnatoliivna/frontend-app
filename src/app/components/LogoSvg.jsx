import HomeRepairServiceSharpIcon from '@mui/icons-material/HomeRepairServiceSharp';

const LogoSvg = () => {
    const logoIcon = {
        fontSize: '50px',
        color: '#be193d',
    };
    const wrapper = {
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    };
    return (
        <div style={wrapper}>
            <HomeRepairServiceSharpIcon style={logoIcon} />
            <p>Logo</p>
        </div>
    );
};

export default LogoSvg;