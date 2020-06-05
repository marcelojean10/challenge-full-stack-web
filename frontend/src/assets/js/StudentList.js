import api from "../../services/api";

/**
 * should be able to realize RUD of CRUD in frontend app.
 * 
 */
export default {
  data: () => ({
    search: '',
    dialog: false,
    headers: [
      {
        text: 'Registro acadêmico',
        align: 'start',
        sortable: false,
        value: 'ra',
      },
      { text: 'Nome', value: 'name' },
      { text: 'E-mail', value: 'email' },
      { text: 'CPF', value: 'cpf' },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    students: [],
    editedIndex: -1,
    editedStudent: {
      name: '',
      email: '',
      cpf: 0
    },
    defaultStudent: {
      name: '',
      email: '',
      cpf: 0
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 
      ? 'Cadastrar aluno' 
      : 'Editar aluno';
    },
  },

  /**
   * Watch modal when close, when have value.
   * 
   */
  watch: {
    dialog (val) {
      val || this.close();
    },
  },

  /**
   * Create a initialization app.
   * 
   */
  created () {
    this.initialize();
  },

  /**
   * Declare all methods.
   */
  methods: {
    /**
     * Method responsible for initial app.
     * 
     */
    async initialize () {
      
      const response = await api.get("/students");

      this.students = response.data;

      console.log('📜 students list loaded successfully.');
    },
    
    /**
     * Update a student.
     * 
     * @param {*} student 
     */
    editStudent (student) {
      this.editedIndex = this.students.indexOf(student);
      this.editedStudent = Object.assign({}, student);
      this.dialog = true;
    },

    /**
     * Delete a student.
     * 
     * @param {*} student 
     */
    async deleteStudent (student) {
      const index = this.students.indexOf(student);

      if (
        confirm('Are you sure you want to delete this student?') 
        && 
        this.students.splice(index, 1)
      ) {
        const response = await api.delete(`/student/${student.ra}`);
        
        alert(response.data.message);
      }
      
    },

    /**
     * Close modal.
     * 
     */
    close () {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedStudent = Object.assign({}, this.defaultStudent);
        this.editedIndex = -1;
      })
    },

    /**
     * Persist in API.
     * 
     */
    async save () {

      const { 
        ra, 
        name, 
        email
      } = this.editedStudent;

      if (this.editedIndex > -1) {
        Object.assign(this.students[this.editedIndex], this.editedStudent);
        
        await api.put(`/student/${ra}`, {
          name,
          email
        });
  
        setTimeout(() => {
          alert(`🚀 ${name} updated with success.`); 
        }, 2000);
        
      }  
      
      this.close();
    },
  },
}