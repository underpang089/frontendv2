<script>
	import {
		Col,
		Row,
		Input,
		Button,
		Card,
		CardHeader,
		CardBody,
	} from 'sveltestrap';

	import Flatpickr from 'svelte-flatpickr';
	import Select from 'svelte-select';
	import Link from 'svelte-link';
	import { html } from 'gridjs';
	import Grid from 'gridjs-svelte';
	import Task from '../../common/data/taskList';
	import TaskListCol from './TaskListCol.svelte';
	import TaskCol from './TaskCol.svelte';
	import { SvelteWrapper } from 'gridjs-svelte/plugins';
	import CreateTaskModal from './createTaskModal.svelte';

	let isOpen = false;
	let createModal = false;
	const toggle = () => (isOpen = !isOpen);
	const setCloseModal = (status) => {
		createModal = status;
	};

	const data = Task.allTask;

	const columns = [
		{
			name: '#',
			width: '40px',
			formatter: (cell) => html(`<div class="form-check"><input type="checkbox" class="form-check-input"/></div>`)
		},
		{
			id: 'taskId',
			name: 'Order ID',
			formatter: (cell) =>
				html(`<a href="/tasks/apps-tasks-details" class="fw-medium link-primary">${cell}</a>`)
		},
		{
			id: 'project',
			name: 'Project',
			formatter: (cell) =>
				html(`<a href="/projects/apps-projects-overview" class="fw-medium link-primary">${cell}</a>`)
		},
		{
			id: 'task',
			hidden: true
		},
		{
			name: 'Tasks',
			plugin: {
				component: SvelteWrapper,
				props: {
					component: TaskCol
				}
			}
		},
		{
			name: 'Created By',
			id: 'creater'
		},
		{
			id: 'subItem',
			hidden: true
		},
		{
			name: 'Assigned To',
			plugin: {
				component: SvelteWrapper,
				props: {
					component: TaskListCol
				}
			}
		},
		{
			name: 'Due Date',
			id: 'dueDate'
		},
		{
			name: 'Status',
			id: 'status',
			formatter: (cell) => {
				if (cell === 'Inprogress') {
					return html(`<span class='badge badge-soft-secondary text-uppercase'>${cell}</span>`);
				}else if (cell === 'New') {
					return html(`<span class='badge badge-soft-info text-uppercase'>${cell}</span>`);
				}
				else if (cell === 'Completed') {
					return html(`<span class='badge badge-soft-success text-uppercase'>${cell}</span>`);
				}
				else if (cell === 'Pending') {
					return html(`<span class='badge badge-soft-warning text-uppercase'>${cell}</span>`);
				}else{
                    return null;
                }
			}
		},
		{ id: 'priorityClass' ,hidden: true },
		{
			name: 'Priority',
			id: 'priority',
			formatter: (cell, row) => {
                if(cell === "Medium"){
                    return html(`<span class="badge bg-${row.cells[10].data} text-uppercase">${cell}</span>`);
                }else if(cell === "High"){
                    return html(`<span class="badge bg-${row.cells[10].data} text-uppercase">${cell}</span>`);
                }else if(cell === "Low"){
                    return html(`<span class="badge bg-${row.cells[10].data} text-uppercase">${cell}</span>`);
                }else{
                    return null;
                }
            }
		}
	];

    const statusOption = [
        {
            value: 'Status',
            label: 'Status'
        },
        {
            value: 'all',
            label: 'All'
        },
        {
            value: 'New',
            label: 'New'
        },
        {
            value: 'Pending',
            label: 'Pending'
        },
        {
            value: 'Inprogress',
            label: 'Inprogress'
        },
        {
            value: 'Completed',
            label: 'Completed'
        }
    ];
</script>

<CreateTaskModal
	show={createModal}
	onDeleteClick={toggle}
	onCloseClick={() => setCloseModal(false)}
/>

<Row>
	<Col lg={12}>
		<Card id="tasksList">
			<CardHeader class="border-0">
				<div class="d-flex align-items-center">
					<h5 class="card-title mb-0 flex-grow-1">All Tasks</h5>
					<div class="flex-shrink-0">
						<Button
							color="danger"
							class="add-btn"
							on:click={() => setCloseModal(true)}><i class="ri-add-line align-bottom me-1" /> Create Task</Button
						>
						<Button color="" class="btn btn-soft-danger"><i class="ri-delete-bin-2-line" /></Button>
					</div>
				</div>
			</CardHeader>
			<CardBody class="border border-dashed border-end-0 border-start-0">
				<form>
					<Row class="g-3">
						<Col sm={12} xxl={5}>
							<div class="search-box">
								<Input
									type="text"
									class="form-control search bg-light border-light"
									placeholder="Search for tasks or something..."
								/>
								<i class="ri-search-line search-icon" />
							</div>
						</Col>
						<!--end col-->

						<Col xxl={3} sm={4}>
							<Flatpickr
								class="form-control bg-light border-light"
								options={{
									dateFormat: 'd M, Y'
								}}
								placeholder="Selact Date"
							/>
						</Col>
						<!--end col-->

						<Col xxl={3} sm={4}>
							<div class="input-light select-single">
								<Select class="form-control" id="idStatus" items={statusOption} />
							</div>
						</Col>
						<!--end col-->
						<Col xxl={1} sm={4}>
							<Button color="primary" class="w-100">
								<i class="ri-equalizer-fill me-1 align-bottom" />
								Filters
							</Button>
						</Col>
						<!--end col-->
					</Row>
					<!--end row-->
				</form>
			</CardBody>
			<!--end card-body-->
			<CardBody>
				<div class="table-responsive table-card gridjs-border-none">
					{#if Task.taskWidgets.length > 0}
						<Grid {data} {columns} pagination={{ enabled: true, limit: 10 }} />
					{:else}
						<!--end table-->
						<div class="noresult" style="display: none">
							<div class="text-center">
								<lord-icon
									src="//cdn.lordicon.com/msoeawqm.json"
									trigger="loop"
									colors="primary:#121331,secondary:#08a88a"
									style="width:75px;height:75px"
								/>
								<h5 class="mt-2">Sorry! No Result Found</h5>
								<p class="text-muted mb-0">
									We've searched more than 200k+ tasks We did not find any tasks for you search.
								</p>
							</div>
						</div>
					{/if}
				</div>
			</CardBody>
			<!--end card-body-->
		</Card>
		<!--end card-->
	</Col>
	<!--end col-->
</Row>