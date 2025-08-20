document.getElementById('sb').addEventListener('click',function(e)
{ 
    e.preventDefault();
    const em=document.getElementById('mail').value
    const us=document.getElementById('user').value
    const ps=document.getElementById('pass').value
    const massage=document.getElementById('res')
    if(em==='sri@123' && us==='Alpha'&& ps==='Pass1234')
    {
        massage.textContent='Login sucessfull'
        massage.className='success'       
    }
    else
    {
        massage.textContent='Invalid'
        massage.className='failed'
    }
})
