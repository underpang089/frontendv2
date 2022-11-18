<svelte:head>
  <title>kanban Board | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
    import Kanban from "svelte-kanban";
    import BreadCrumb from "../../Components/Common/BreadCrumb.svelte";
    import { Container, Row } from "sveltestrap";
</script>

<div class="page-content">
    <Container fluid>
        <BreadCrumb title="Kanban Board" pageTitle="Tasks" />
        <Row>
            <div class="kanbanboard" style="width:100%; height: 100%;">
                <Kanban
                on:columnSaveTitle
                on:columnRemove
                on:columnAdd
                on:cardDragStart
                on:cardDragMove
                on:cardDragEnd
                on:cardDragSuccess
                on:cardDragFailed
                on:cardAdd
                on:cardPropSaved
                on:cardPropModify
                on:moveCardUp
                on:moveCardDown
                colsList={[{
                    name:'Todo',
                    cards:[],
                },{
                    name:'Done', 
                    cards:[]
            }]}
            />
            </div>
        </Row>
    </Container>
</div>