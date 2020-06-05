  import { validationMixin } from 'vuelidate';
  import { 
    required, 
    maxLength, 
    minLength, 
    email 
  } from 'vuelidate/lib/validators';
  import api from "../../services/api";
  import cpfValidator from '../../utils/cpfValidator.js';

/**
 * should be able to realize Create of CRUD in frontend app.
 * 
 */
  export default {
    mixins: [validationMixin],

    validations: {
      ra: { required, maxLength: maxLength(10) },
      name: { required, minLength: minLength(5) },
      cpf: { required, maxLength: maxLength(11), cpfValidator },
      email: { required, email }
    },

    data: () => ({
      ra: '',
      name: '',
      cpf: '',
      email: ''
    }),

    computed: {
      /**
       * Academy register erros.
       * 
       */
      raErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.ra.maxLength && errors.push('RA must be at most 10 characters long')
        !this.$v.ra.required && errors.push('RA is required.')
        return errors
      },
      /**
       * Student name erros.
       * 
       */
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('Name must be at most 5 characters small')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      /**
       * Documment student erros.
       * 
       */
      cpfErrors () {
        const errors = []
        if (!this.$v.cpf.$dirty) return errors
        !this.$v.cpf.maxLength && errors.push('CPF must be at most 11 characters long')
        !this.$v.cpf.required && errors.push('CPF is required.');
        !this.$v.cpf.cpfValidator && errors.push('CPF invalid.');
        return errors
      },
      /**
       * E-mail errros.
       * 
       */
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },

    /**
     * Declare all methods.
     * 
     */
    methods: {
      /**
       * Submit form.
       * 
       */
      async submit () {
        this.$v.$touch();
        
        const ra = this.$v.ra.$model;
        const name = this.$v.name.$model;
        const email = this.$v.email.$model;
        const cpf = this.$v.cpf.$model;

        const response = await api.post('/student', {
              ra,
              name,
              email,
              cpf
            });
      
        setTimeout(() => {
          alert(`🚀 ${response.data.message}`); 
        }, 2000);

        this.clear();
    },
    /**
     * Form clean
     */
      clear () {
        this.$v.$reset();
        this.ra = '';
        this.name = '';
        this.cpf = '';
        this.email = '';
      }
    }
  }
