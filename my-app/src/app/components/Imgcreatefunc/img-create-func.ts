export function imageSrcCreator(id: string = '') {
	if (!id) return 'https://dummyimage.com/856x512/787678/ffffff.jpg&text=No+image';
	let src = `http://194.87.237.48:5000/Images/${id}`;
	return src;
  };