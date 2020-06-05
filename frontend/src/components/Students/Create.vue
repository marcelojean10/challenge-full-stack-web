<template>
  <v-container>
    <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Informe o nome completo"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="Informe apenas um e-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="ra"
      :error-messages="raErrors"
      :counter="10"
      label="Informe o registro acadêmico"
      required
      @input="$v.ra.$touch()"
      @blur="$v.ra.$touch()"
    ></v-text-field>
    
    <v-text-field
      v-model="cpf"
      :error-messages="cpfErrors"
      :counter="10"
      label="Informe o número do documento"
      required
      @input="$v.cpf.$touch()"
      @blur="$v.cpf.$touch()"
    ></v-text-field>
    

    <v-btn @click="submit">Cadastrar</v-btn>
    <v-btn @click="clear">Limpar</v-btn>
    <v-btn to="/student/list" class="mr-4">Voltar</v-btn>
  </form>
  </v-container>
</template>

<script src="../../assets/js/StudentCreate.js"></script>