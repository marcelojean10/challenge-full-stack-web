<template>
  <v-data-table
    :headers="headers"
    :items="students"
    :search="search"
    :items-per-page="5"
    sort-by="name"
    item-key="ra"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Consulta de alunos</v-toolbar-title>
        
        <v-spacer></v-spacer>
          <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Digite sua busca"
          single-line
          hide-details
        ></v-text-field>
       <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <v-btn color="primary" white class="mb-2" to="/student/create">
              Cadastrar aluno
        </v-btn>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary hide" white class="mb-2 studentRegister" v-on="on" href="/student/create">
              Cadastrar aluno
            </v-btn>
          </template>
          
          <v-card>
          
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedStudent.name" label="Nome do aluno"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedStudent.email" label="E-mail"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedStudent.cpf" label="CPF"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editStudent(item)"
        color="orange" 
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteStudent(item)"
        color="red" 
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script src="../../assets/js/StudentList.js"></script>
<style>
  .studentRegister {
    display: none;
  }
</style>