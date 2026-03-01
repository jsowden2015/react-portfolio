import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        color: '#2c3e50',
                        maxWidth: '32rem',
                        margin: '0 auto'
                    }}
                    role="alert"
                >
                    <h2 style={{ marginBottom: '0.5rem' }}>Something went wrong</h2>
                    <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                        Sorry for the inconvenience. Please refresh the page or try again in a moment.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 600
                        }}
                    >
                        Reload page
                    </button>
                    <p style={{ marginTop: '2rem', fontSize: '0.875rem', opacity: 0.7 }}>
                        Justin Sowden — Portfolio
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};

export default ErrorBoundary;
