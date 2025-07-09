const ingredientes = document.getElementById('ingredientesBtn');
const inspiracion = document.getElementById('inspiracionBtn');
const equipo = document.getElementById('equipoBtn');

// Sections ----->
const ingSection = document.getElementById('ingSection');
const inspSection = document.getElementById('inspSection');
const equipoSection = document.getElementById('equipoSection');

const allSections = document.querySelectorAll('.content');
const allButtons = document.querySelectorAll('.option-link');
const allArrows = document.querySelectorAll('.fa-arrow-right');

function agregarFuncionalidad(button, content){
    button.addEventListener('click', ()=>{
        allSections.forEach(section =>{
            section.classList.add('hidden-content');
        });
        content.classList.remove('hidden-content');
        allButtons.forEach(btn =>{
            btn.classList.remove('active');
        })
        button.classList.add('active');
        allArrows.forEach(arrow =>{
            arrow.classList.remove('active-arrow');
        })
        const myArrow = button.querySelector('i');
        myArrow.classList.add('active-arrow')
        
    })
}
agregarFuncionalidad(ingredientes, ingSection);
agregarFuncionalidad(inspiracion, inspSection);
agregarFuncionalidad(equipo, equipoSection);

const options = document.querySelectorAll('.link-options li');
const checkbx = document.getElementById('menu-active');

options.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 970) {
      checkbx.checked = false;
    }
  });
});
