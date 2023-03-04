import './InputFile.scss'

export const InputFile = () => {
  return (
	<div className='mc-C002-input-file'> 
		<input type='file' id='file' />
		<label htmlFor='file' className='C01-C002' >
			<span>Seleccione un archivo</span>
		</label>
	</div>
   
  )
}
