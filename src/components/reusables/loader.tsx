import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {

    return (
        <div style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',}}>
                    
                    <TailSpin
                        height="80"
                        width="80"
                        color="#2C4A8B"
                        ariaLabel="loading"
                    />
                </div>
    )
}

export const SmallLoader = () => {

    return (
        <div style={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
                    
                    <TailSpin
                        height="40"
                        width="40"
                        color="#2C4A8B"
                        ariaLabel="loading"
                    />
                </div>
    )
}
