import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { apiDataContaxt } from '../contaxt/apiContaxt';

function CertificateDetail() {
  const { id } = useParams();
  const { certifecates } = useContext(apiDataContaxt);

  const certifecate = certifecates?.find(c => String(c.id) === id);

  if (!certifecate) return <div className="text-center bg-fuchsia-400 p-8 text-white text-5xl">Certificate not found</div>;

  return (
    <div className=" bg-amber-200 flex min-h-screen flex-col items-centerp-8">
    <div className=" bg-amber-200 p-8">
      <h1 className="text-3xl font-bold">id {certifecate.id}</h1>
      <h1 className="text-3xl font-bold">{certifecate.title}</h1>
      <p>{certifecate.description}</p>
      <p><strong>is Favourites</strong> {certifecate.favorate ? 'Yes' : 'No'}</p>
            <p><strong>Category:</strong> {certifecate.category}</p>
      <p className="mt-4"><strong>Issuer:</strong> {certifecate.issuer}</p>
     <p><strong>Program:</strong> {certifecate.program}</p>
      <p><strong>Issued Date:</strong> {certifecate.issuedDate}</p>
      <p><strong>Certificate No:</strong> {certifecate.certificateNo || 'N/A'}</p>
      <p><strong>Validity:</strong> {certifecate.validity || 'N/A'}</p>
      <p><strong>Duration:</strong> {certifecate.duration || 'N/A'}</p>
      <p><strong>Status:</strong> {certifecate.status || 'N/A'}</p>
        <p><strong>Authority:</strong> {certifecate.authority || 'N/A'}</p>

      <p><strong>Value Tier:</strong> {certifecate.valueTier || 'N/A'}</p>
    
    </div>
    </div>
  );
}

export default CertificateDetail;