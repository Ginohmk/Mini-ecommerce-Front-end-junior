import React from 'react';
import Button from '../utilities/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header({ headingText }) {
  const navigate = useNavigate();
  const handleAddPage = () => {
    navigate('/add-product');
  };

  const handleFormSubmit = () => {
    document.querySelector('form').querySelector('.submit').click();
  };

  const handleFormCancel = () => {
    document.querySelector('form').querySelector('.cancel').click();
  };

  return (
    <Container heading={headingText}>
      <section className="header-items flex j-between">
        <h1>{headingText}</h1>

        <div className="header-buttons">
          <Button type="button" title="ADD" actionHandle={handleAddPage} />
          <Button type="button" title="MASS DELETE" />
        </div>

        <div className="header-buttons-save">
          <Button type="button" title="SAVE" actionHandle={handleFormSubmit} />
          <Button
            type="button"
            title="CANCEL"
            actionHandle={handleFormCancel}
          />
        </div>
      </section>
      <hr className="line" />
    </Container>
  );
}

export default Header;
const Container = styled.div`
  padding-top: 3rem;
  margin-top: 20px;

  .header-items {
    align-items: flex-end;
    .header-buttons,
    .header-buttons-save {
      align-items: center;
      gap: 1rem;
    }

    .header-buttons {
      display: ${({ heading }) =>
        heading.includes('Product Add') ? 'none' : 'flex'};
    }

    .header-buttons-save {
      display: ${({ heading }) =>
        heading.includes('Product List') ? 'none' : 'flex'};
    }
  }
`;
