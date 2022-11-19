<script lang="ts">
	import { Container, Row, Col } from "sveltestrap";
	import BreadCrumb from "../../Components/Common/BreadCrumb.svelte";
	import Section from "./_components/Section.svelte";
	import Widget from "./_components/Widgets.svelte";
	import Revenue from "./_components/Revenue.svelte";
	import SalesByLocations from "./_components/SalesByLocations.svelte";
	import BestSellingProducts from "./_components/BestSellingProducts.svelte";
	import TopSellers from "./_components/TopSellers.svelte";
	import StoreVisits from "./_components/StoreVisits.svelte";
	import RecentOrders from "./_components/RecentOrders.svelte";
	import RecentActivity from "./_components/RecentActivity.svelte";
	import Counter from "../../Components/Common/counter.svelte";
</script>

<svelte:head>
	<title>Dashboard | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>

<Counter />
<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Dashboard" pageTitle="Dashboards" />

		<Row>
			<Col>
				<div class="h-100">
					<Section />
					<Row>
						<Widget />
					</Row>
					<Row>
						<Col xl={8}>
							<Revenue />
						</Col>
						<SalesByLocations />
					</Row>
					<Row>
						<BestSellingProducts />
						<TopSellers />
					</Row>
					<Row>
						<StoreVisits
							dataColors={[
								"--vz-primary",
								"--vz-success",
								"--vz-warning",
								"--vz-danger",
								"--vz-info",
							]}
						/>
						<RecentOrders />
					</Row>
				</div>
			</Col>
			<RecentActivity />
		</Row>
	</Container>
</div>
