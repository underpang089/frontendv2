<script>
	import { Button, Modal, Form, Label, ModalHeader, ModalFooter, Input } from 'sveltestrap';
	import Select from 'svelte-select';
	import Flatpickr from 'svelte-flatpickr';
	export let show;
	export let onDeleteClick;
	export let onCloseClick;

	import avatar1 from '../../assets/images/users/avatar-1.jpg';
	import avatar2 from '../../assets/images/users/avatar-2.jpg';
	import avatar3 from '../../assets/images/users/avatar-3.jpg';
	import avatar5 from '../../assets/images/users/avatar-5.jpg';
	import avatar6 from '../../assets/images/users/avatar-6.jpg';
	import avatar7 from '../../assets/images/users/avatar-7.jpg';
	import avatar8 from '../../assets/images/users/avatar-8.jpg';
	import avatar10 from '../../assets/images/users/avatar-10.jpg';

    const ticketStatus = [
        {
            value: 'Status',
            label: 'Status'
        },
        {
            value: 'New',
            label: 'New'
        },
        {
            value: 'Inprogress',
            label: 'Inprogress'
        },
        {
            value: 'Pending',
            label: 'Pending'
        },
        {
            value: 'Completed',
            label: 'Completed'
        },
    ];

    const priorityField = [
        {
            value: 'Priority',
            label: 'Priority'
        },
        {
            value: 'High',
            label: 'High'
        },
        {
            value: 'Medium',
            label: 'Medium'
        },
        {
            value: 'Low',
            label: 'Low'
        }
    ]

</script>

<Modal
	class="zoomIn"
	id="showModal"
	size="lg"
	isOpen={show}
	fade={true}
	centered={true}
	toggle={onDeleteClick}
>
	<ModalHeader class="p-3 bg-soft-info" {onDeleteClick}>Create Task</ModalHeader>
	<Form action="">
		<div class="modal-body">
			<input type="hidden" id="tasksId" />
			<div class="row g-3">
				<div class="col-lg-Status2">
					<Label for="projectName-field" class="form-label">Project Name</Label>
					<Input
						type="text"
						id="projectName-field"
						class="form-control"
						placeholder="Project name"
						required
					/>
				</div>
				<!--end col-->
				<div class="col-lg-12">
					<div>
						<Label for="tasksTitle-field" class="form-label">Title</Label>
						<input
							type="text"
							id="tasksTitle-field"
							class="form-control"
							placeholder="Title"
							required
						/>
					</div>
				</div>
				<!--end col-->
				<div class="col-lg-12">
					<Label for="clientName-field" class="form-label">Client Name</Label>
					<Input
						type="text"
						id="clientName-field"
						class="form-control"
						placeholder="Client name"
						required
					/>
				</div>
				<!--end col-->
				<div class="col-lg-12">
					<Label class="form-label">Assigned To</Label>
					<div data-simplebar style="height: 95px;">
						<ul class="list-unstyled vstack gap-2 mb-0">
							<li>
								<div class="form-check d-flex align-items-center">
									<input
										class="form-check-input me-3"
										type="checkbox"
										name="assignedTo[]"
										value="avatar-1.jpg"
										id="anna-adame"
									/>
									<Label class="form-check-label d-flex align-items-center" for="anna-adame">
										<span class="flex-shrink-0">
											<img
												src={avatar1}
												alt=""
												class="avatar-xxs rounded-circle"
											/>
										</span>
										<span class="flex-grow-1 ms-2"> Anna Adame </span>
									</Label>
								</div>
							</li>
							<li>
								<div class="form-check d-flex align-items-center">
									<input
										class="form-check-input me-3"
										type="checkbox"
										name="assignedTo[]"
										value="avatar-3.jpg"
										id="frank-hook"
									/>
									<Label class="form-check-label d-flex align-items-center" for="frank-hook">
										<span class="flex-shrink-0">
											<img
												src={avatar3}
												alt=""
												class="avatar-xxs rounded-circle"
											/>
										</span>
										<span class="flex-grow-1 ms-2"> Frank Hook </span>
									</Label>
								</div>
							</li>
							<li>
								<div class="form-check d-flex align-items-center">
									<input
										class="form-check-input me-3"
										type="checkbox"
										name="assignedTo[]"
										value="avatar-6.jpg"
										id="alexis-clarke"
									/>
									<Label class="form-check-label d-flex align-items-center" for="alexis-clarke">
										<span class="flex-shrink-0">
											<img
												src={avatar6}
												alt=""
												class="avatar-xxs rounded-circle"
											/>
										</span>
										<span class="flex-grow-1 ms-2"> Alexis Clarke </span>
									</Label>
								</div>
							</li>
							<li>
								<div class="form-check d-flex align-items-center">
									<input
										class="form-check-input me-3"
										type="checkbox"
										name="assignedTo[]"
										value="avatar-2.jpg"
										id="herbert-stokes"
									/>
									<Label class="form-check-label d-flex align-items-center" for="herbert-stokes">
										<span class="flex-shrink-0">
											<img
												src={avatar2}
												alt=""
												class="avatar-xxs rounded-circle"
											/>
										</span>
										<span class="flex-grow-1 ms-2"> Herbert Stokes </span>
									</Label>
								</div>
							</li>
							<li>
								<div class="form-check d-flex align-items-center">
									<input
										class="form-check-input me-3"
										type="checkbox"
										name="assignedTo[]"
										value="avatar-7.jpg"
										id="michael-morris"
									/>
									<Label class="form-check-label d-flex align-items-center" for="michael-morris">
										<span class="flex-shrink-0">
											<img
												src={avatar7}
												alt=""
												class="avatar-xxs rounded-circle"
											/>
										</span>
										<span class="flex-grow-1 ms-2"> Michael Morris </span>
									</Label>
								</div>
							</li>
							<li>
								<div class="form-check d-flex align-items-center">
									<input
										class="form-check-input me-3"
										type="checkbox"
										name="assignedTo[]"
										value="avatar-5.jpg"
										id="nancy-martino"
									/>
									<Label class="form-check-label d-flex align-items-center" for="nancy-martino">
										<span class="flex-shrink-0">
											<img
												src={avatar5}
												alt=""
												class="avatar-xxs rounded-circle"
											/>
										</span>
										<span class="flex-grow-1 ms-2"> Nancy Martino </span>
									</Label>
								</div>
							</li>
							<li>
								<div class="form-check d-flex align-items-center">
									<input
										class="form-check-input me-3"
										type="checkbox"
										name="assignedTo[]"
										value="avatar-8.jpg"
										id="thomas-taylor"
									/>
									<Label class="form-check-label d-flex align-items-center" for="thomas-taylor">
										<span class="flex-shrink-0">
											<img
												src={avatar8}
												alt=""
												class="avatar-xxs rounded-circle"
											/>
										</span>
										<span class="flex-grow-1 ms-2"> Thomas Taylor </span>
									</Label>
								</div>
							</li>
							<li>
								<div class="form-check d-flex align-items-center">
									<input
										class="form-check-input me-3"
										type="checkbox"
										name="assignedTo[]"
										value="avatar-10.jpg"
										id="tonya-noble"
									/>
									<Label class="form-check-label d-flex align-items-center" for="tonya-noble">
										<span class="flex-shrink-0">
											<img
												src={avatar10}
												alt=""
												class="avatar-xxs rounded-circle"
											/>
										</span>
										<span class="flex-grow-1 ms-2"> Tonya Noble </span>
									</Label>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<!--end col-->
				<div class="col-lg-6">
					<Label for="duedate-field" class="form-label">Due Date</Label>
					<Flatpickr
                        class="form-control"
                        options={{
                            dateFormat: 'd M, Y'
                        }}
                        placeholder="Selact Date"
                    />
				</div>
				<!--end col-->
				<div class="col-lg-6">
					<Label for="ticket-status" class="form-label">Status</Label>
					<Select class="form-control" id="ticket-status" items={ticketStatus}>
					</Select>
				</div>
				<!--end col-->
				<div class="col-lg-12">
					<Label for="priority-field" class="form-label">Priority</Label>
					<Select class="form-control" id="priority-field" items={priorityField}>
					</Select>
				</div>
				<!--end col-->
			</div>
			<!--end row-->
		</div>
		<ModalFooter>
			<div class="hstack gap-2 justify-content-end">
				<Button color="light" on:click={onCloseClick}>Close</Button>
				<Button color="success" class="d-none" id="add-btn">Add Task</Button>
				<Button color="success" on:click={onCloseClick} id="edit-btn">Update Task</Button>
			</div>
		</ModalFooter>
	</Form>
</Modal>
