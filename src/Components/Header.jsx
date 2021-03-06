import PropTypes from 'prop-types';

import Button from './Button';

const Header = ({ title, buttonTogle, showInputs }) => {

    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color={showInputs ? 'red' : 'green'} text={showInputs ? 'Close' : 'Add'} onClick={buttonTogle}></Button>
            </header>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
