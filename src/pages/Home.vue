<template>
    <Form @submitForm="handleSubmit" />
    <List @removeNote="handleRemoveNote" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
export default {
    components: {
        Form,
        List
    },
    data() {
        return {
            notes: [
                {
                    title: 'Learn Vue 3',
                    tags: ['work']
                },
                {
                    title: 'Finish course',
                    tags: ['work', 'home']
                }
            ]
        }
    },
    watch: {
        notes: {
            handler(updatedList) {
                localStorage.setItem('notes', JSON.stringify(updatedList))
            },
            deep: true
        }
    },
    mounted() {
        this.getNotes()
    },
    methods: {
        handleSubmit(title) {
            this.notes.push({
                title: title,
                tags: []
            })
        },
        handleRemoveNote(index) {
            this.notes.splice(index, 1)
        },
        getNotes() {
            const localStorageNotes = localStorage.getItem('notes')
            if (localStorageNotes) {
                this.notes = JSON.parse(localStorageNotes)
            }
        }
    }
}
</script>
