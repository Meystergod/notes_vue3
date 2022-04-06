const App = {
    data() {
        return {
            title: 'Notes',
            value: '',
            notes: ['Default task'],
            editIndex: -1
        };
    },
    mounted() {
        this.getNotes();
    },
    methods: {
        submitForm() {
            this.notes.push(this.value);
            this.value = '';
        },
        removeNote(index) {
            this.notes.splice(index, 1);
        },
        editNote(index) {
            this.editIndex = index;
        },
        getNotes() {
            const localStorageNotes = localStorage.getItem('notes');
            if(localStorageNotes) {
                this.notes = JSON.parse(localStorageNotes);
            };
        }
    },
    watch: {
        notes: {
            handler(updatedList) {
                localStorage.setItem('notes', JSON.stringify(updatedList));
            },
            deep: true
        }
    }
};

Vue.createApp(App).mount('#app');